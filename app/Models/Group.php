<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    protected $table = 'groups';

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        foreach (config('client.languages') as $language){
            $this->setAttribute('name_' . $language, null);
        }
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
