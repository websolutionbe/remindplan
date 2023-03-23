<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeoMetaTag extends Model
{
    use HasFactory;

    protected $table = 'seo_meta_tags';

    protected $fillable = [
        'parent_type',
        'description',
        'no_index',
    ];

    protected $appends = ['default_title', 'title', 'description'];

    public function page(){
        return $this->belongsTo(Page::class);
    }

    public function getDefaultTitleAttribute()
    {
        return config('client.title');
    }

    public function getTitleAttribute()
    {
        return $this->{'title_' . app()->getLocale()};
    }

    public function getDescriptionAttribute()
    {
        return $this->{'description_' . app()->getLocale()};
    }

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        foreach (config('client.languages') as $language){
            $this->setAttribute('title_' . $language, null);
            $this->setAttribute('description_' . $language, null);
        }
    }
}
