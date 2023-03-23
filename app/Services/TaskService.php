<?php

namespace App\Services;

use App\Models\Task;
use Carbon\Carbon;

class TaskService
{
    public function __construct()
    {

    }

    public function updateTaskByPeriod(Task $task)
    {
        $task->toggle();

        if($task->done){
            $task->end_date = match ($task->period) {
                "day" => null,
                "week" => Carbon::now()->addWeek()->toDateString(),
                "month" => Carbon::now()->addMonth()->toDateString(),
                "quarter" => Carbon::now()->addQuarter()->toDateString(),
            };
        }else {
            $task->end_date = null;
        }

        $task->save();

    }

}
