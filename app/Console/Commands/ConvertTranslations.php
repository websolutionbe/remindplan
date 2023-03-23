<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ConvertTranslations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'convert:translations';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $turkish = json_decode(file_get_contents(database_path('default/locales/tr_TR/translations.json')));
        $dutch = json_decode(file_get_contents(database_path('default/translations.json')));

        $translations = [];
        foreach ($turkish as $trans_turk){
            foreach ($dutch as $trans_dutch) {
                if($trans_turk->{'key'} === $trans_dutch->{'key'}){
                    $translations[] = [
                        'key' => $trans_dutch->{'key'},
                        'value_nl' => $trans_dutch->{'value_nl'},
                        'value_tr' => $trans_turk->{'value_tr'},
                    ];
                }
            }
        }

        dd(json_encode($translations));
    }
}
