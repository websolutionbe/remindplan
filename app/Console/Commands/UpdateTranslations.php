<?php

namespace App\Console\Commands;

use App\Models\Translation;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class UpdateTranslations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'translations:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Removes cache from translations & fetch all translations';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Cache::forget('translations');
        Cache::put('translations', Translation::all()->values()->all());

        $this->line('<fg=green>translations updated</>');
    }
}
