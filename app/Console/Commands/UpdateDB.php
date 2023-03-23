<?php

namespace App\Console\Commands;

use App\Models\Testimonial;
use App\Models\Translation;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class UpdateDB extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:db';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clears all caches';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Cache::forget('translations');
        Cache::put('translations', Translation::all()->values()->all());

        $this->line('<fg=green>database successfully updated</>');
    }
}
