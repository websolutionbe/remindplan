<?php
/**
 * @author Ian Vleeshouwers ian@websolution.be
 **/
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $table = 'pages';

    protected $fillable = [
        'key',
        'visible',
    ];

    protected $appends = ['slug'];

    public function getSlugAttribute()
    {
        return $this->{'slug_' . app()->getLocale()};
    }

    public function seo()
    {
        return $this->hasOne(SeoMetaTag::class);
    }


    public function blocks()
    {
        return Block::where('parent_type', 'page')
            ->where('parent_id', $this->id)
            ->where('visible', true)
            ->orderBy('sorting')
            ->get()->all();
    }

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        foreach (config('client.languages') as $language){
            $this->setAttribute('title_' . $language, null);
            $this->setAttribute('slug_' . $language, null);
        }
    }
}
