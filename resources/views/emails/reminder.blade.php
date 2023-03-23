@foreach($tasks as $task)
    {{ $task->title }} <span>{{ $task->done }}</span><br>
@endforeach
