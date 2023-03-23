<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    use HasFactory;

    protected $table = 'blocks';

    protected $fillable = [
        'parent_id',
        'parent_type',
        'type',
        'value_nl',
        'link_url',
        'media_type',
        'media_path',
        'sorting'
    ];

    protected $appends = ['value'];

    public function getValueAttribute()
    {
        return $this->{'value_' . app()->getLocale()};
    }


    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        foreach (config('client.languages') as $language){
            $this->setAttribute('value_' . $language, null);
        }
    }

}
