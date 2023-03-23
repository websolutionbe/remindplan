<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    protected $table = 'translations';

    protected $guarded = ['id'];

    protected $fillable = [
        'updated_at',
        'key'
    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        foreach (config('client.languages') as $language){
            $this->setAttribute('value_' . $language, null);
        }
    }
}
