<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubmissionRequest;
use App\Models\Category;
use App\Models\Page;
use App\Models\Submission;
use App\Models\Task;
use App\Models\Translation;
use App\Services\TaskService;
use Carbon\Doctrine\DateTimeType;
use DateTime;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

class AppController extends Controller
{
    public function translation(Request $request): JsonResponse
    {
        Translation::create([
            'key' => $request['key']
        ]);

        Cache::put('translations',Translation::all()->values()->all());

        return response()->json(['key' => $request['key'], 'translations' => Cache::get('translations')]);
    }

    public function update(Request $request, TaskService $service): JsonResponse
    {
        $task = Task::findOrFail($request['task_id']);

        $service->updateTaskByPeriod($task);


        return response()->json(['task' => $task]);
    }

    public function delete(Request $request): JsonResponse
    {
        $task = Task::findOrFail($request['id']);
        $task->delete();

        return response()->json(['success' => true]);
    }

    public function create(Request $request): JsonResponse
    {
        $task = Task::create([
           'title_' . app()->getLocale() => $request['title'],
        ]);

        $category = Category::findOrFail($request['category']);

        $task->category()->associate($category)->save();

        $task->save();

        return response()->json(['task' => $task]);
    }

    public function index(string $id): JsonResponse
    {
        $category = Category::findOrFail($id);
        $tasks = $category->tasks->all();

        return response()->json(['tasks' => $tasks, 'category' => $category]);
    }

    public function progress(string $id): JsonResponse
    {
        $category = Category::findOrFail($id);
        $tasks = $category->tasks->all();
        $done = $category->tasks->where('done')->all();

        return response()->json(['total' => count($tasks), 'done' => count($done) ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function submission(SubmissionRequest $request): JsonResponse
    {
        if($this->honeypot($request)){
            return response()->json(['error' => true, 'bot-detection' => true]);
        }

        $submission = Submission::create([
            'firstname' => $request['firstname'],
            'lastname' => $request['lastname'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'message' => $request['message'],
            'referral_code' => $request['referral_code'],
            'contact_type' => $request['contact_type'],
            'ip_address' => $request->ip(),
        ]);

        $this->sendSubmissionMail($submission);


        return response()->json(['success' => true, 'submission' => $submission]);
    }

    /**
     * @param Request $request
     * @return bool
     */
    private function honeypot(Request $request): bool
    {
        return ((new DateTime())->getTimestamp() - $request['timestamp']) < 3
            || $request['street'] !== null;
    }

    private function sendSubmissionMail(Submission $submission){
        Mail::send('emails.submission', ['data' => $submission], function ($mail) {
            $mail->to(config('client.email'), 'websolution')->subject('nieuw formulierinzending');
            $mail->from(config('client.no_reply'), 'Formulier');
        });
    }
}
