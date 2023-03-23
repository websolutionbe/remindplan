<?php

namespace App\Console\Commands;

use App\Models\Page;
use App\Models\SeoMetaTag;
use Illuminate\Console\Command;

class CreatePage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:page';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates pages';

    public function handle()
    {
        $name = strtolower($this->ask('Name of page'));
        $name_nl = strtolower($this->ask('NL name for seo'));

        $this->createVue($name);
        $this->createControllerMethod($name);
        $this->createPageModel($name, $name_nl);
        $this->createRoute($name, $name_nl);

        $this->line('✅  '. $name . ' has been created');
    }

    private function createVue(string $name)
    {
        $vue = $this->getVueTemplate($name);
        file_put_contents('resources/js/components/pages/' . ucfirst($name) . '.vue', $vue);
    }

    private function getVueTemplate($name): string
    {
        return '<template>
    <seo :meta="$page.props.meta" />
    <Layout>
    <h1>' . $name . '</h1>
  </Layout>

</template>

<script>
import Seo from "../utils/Seo";
import Layout from "../layout/Layout";
export default {
  name: "' . ucfirst($name) . '",
  components : {Layout, Seo}
}
</script>';
    }

    private function createControllerMethod(string $name) : void
    {
        $content = file_get_contents('app/Http/Controllers/PageController.php');
        $parts = explode('// Generated methods', $content);
        $new = $parts[0] . "// Generated methods" . '
    public function ' . $name .'()
    {
        $page = Page::where("key", "' . $name . '")->first();
        $meta = $page->seo;

        return Inertia::render("' . ucfirst($name) . '", ["meta" => $meta]);
    }' . $parts[1];

        file_put_contents('app/Http/Controllers/PageController.php', $new);
    }

    private function createPageModel(string $name, string $name_nl) : void
    {
        $page = Page::create([
            'key' => $name,
            'title' =>  ucfirst($name_nl) ?: ucfirst($name),
            'slug' => $name_nl ?: $name,
            'body' => null,
            'visible' => true,
        ]);

        $seo_page = SeoMetaTag::create([
            'parent_type' => 'page',
            'title' =>  ucfirst($name_nl) ?: ucfirst($name),
            'description' => null,
        ]);

        $seo_page->page()->associate($page)->save();
    }

    private function createRoute(string $name, string $name_nl) : void
    {
        $content = file_get_contents('routes/web.php');
        $parts = explode('/* generated routes */', $content);
        $new = $parts[0] . "/* generated routes */" . "
    Route::get('/" . ($name_nl ?: $name) . "', '" . $name . "')->name('" . $name . "');" . $parts[1];

        file_put_contents('routes/web.php', $new);
    }
}
