<?php

namespace App\Console\Commands;

use App\Mail\DailyReminderMail;
use App\Models\Task;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class DailyReminder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function handle()
    {
        $tasks = Task::whereHas('category', function($cat){
            $cat->where('period', 'day');
        })->get();

        foreach ($tasks as $task){
            $task->done = false;
            $task->save();
        }

        Mail::send('emails.reminder', ['tasks' => $tasks], function ($mail) {
            $mail->to('ianvleeshouwers@hotmail.com')->subject('new reminder');
            $mail->from('noreply@reminplan.com', 'Reminder');
        });

    }
}
