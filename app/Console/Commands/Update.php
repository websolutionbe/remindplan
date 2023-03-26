<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Update extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update {--db}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Updates routes, db and runs production';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {


        shell_exec('php artisan ziggy:generate');
        $this->line('ziggy routes updated');
        shell_exec('npm run prod');
        $this->line('production built');
        if($this->option('db')){
            shell_exec('php artisan migrate:refresh --seed');
            $this->line('updated & refreshed db');
        }
    }
}
