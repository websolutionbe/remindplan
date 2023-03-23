<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Block;
use App\Models\Category;
use App\Models\Group;
use App\Models\Page;
use App\Models\SeoMetaTag;
use App\Models\Task;
use App\Models\Translation;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // pages
        $pages = json_decode(file_get_contents(database_path('default/pages.json')));

        foreach ($pages as $page){
            $pageObject = Page::create([
                'key' => $page->{'key'},
                'title_nl' => $page->{'title_nl'},
                'slug_nl' => $page->{'slug_nl'},
                'visible' => $page->{'visible'},
            ]);

            $seo = SeoMetaTag::create([
                'title_nl' =>  $page->{'seo'}->{'title_nl'},
                'parent_type' =>  $page->{'seo'}->{'parent_type'},
                'description_nl' =>  $page->{'seo'}->{'description_nl'},
                'no_index' =>  $page->{'seo'}->{'no_index'},
            ]);

            $seo->page()->associate($pageObject)->save();

            if (property_exists($page, 'blocks')){
                foreach ($page->{'blocks'} as $block){
                    Block::create([
                        'parent_id' => $pageObject->id,
                        'parent_type' => 'page',
                        'type' => $block->{'type'},
                        'value_nl' => $block->{'value_nl'},
                        'sorting' => $block->{'sorting'},
                    ]);
                }
            }
        }

        // users
        $users = json_decode(file_get_contents(database_path('default/users.json')));

        $group = Group::create(['name_nl' => 'huishouden']);

        foreach ($users as $user){
            $userObject = User::create([
                'email' => $user->{'email'},
                'first_name' => $user->{'first_name'},
                'last_name' => $user->{'last_name'},
                'phone' => $user->{'phone'},
                'color' => $user->{'color'},
                'password' => Hash::make($user->{'password'})
            ]);

            $userObject->group()->associate($group)->save();

        }

        // translations
        $translations = json_decode(file_get_contents(database_path('default/translations.json')));

        foreach ($translations as $translation){
            Translation::create([
                'key' => $translation->{'key'},
                'value_nl' => $translation->{'value_nl'},
            ])->save();
        }

        // categories
        $cat1 = Category::create([
           'title_nl' => 'Vandaag',
           'slug_nl' => 'vandaag',
           'period' => 'day',
           'color' => 'green',
           'key' => 'today'
        ]);

        $cat2 = Category::create([
            'title_nl' => 'Deze week',
            'slug_nl' => 'week',
            'period' => 'week',
            'color' => 'blue',
            'key' => 'week'
        ]);

        $cat3 = Category::create([
            'title_nl' => 'Deze maand',
            'slug_nl' => 'maand',
            'period' => 'month',
            'color' => 'red',
            'key' => 'month'
        ]);

        $cat4 = Category::create([
            'title_nl' => 'Dit kwartaal',
            'slug_nl' => 'kwartaal',
            'period' => 'quarter',
            'color' => 'yellow',
            'key' => 'quarter'
        ]);


        $cat1->group()->associate($group)->save();
        $cat2->group()->associate($group)->save();
        $cat3->group()->associate($group)->save();
        $cat4->group()->associate($group)->save();

        // tasks
        $tasks = json_decode(file_get_contents(database_path('default/tasks.json')));

        foreach ($tasks as $period){
            foreach ($period->{'tasks'} as $task) {
                $taskObject = Task::create([
                    'done' => false,
                    'title_nl' => $task->{'title_nl'},
                ]);

                $category = Category::where('period', $period->{'period'})->first();
                $taskObject->category()->associate($category)->save();

            }

        }


    }
}
