<?php

namespace App\Models;

use App\Enums\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory;

    protected $table = 'users';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'password',
        'role',
        'color'
    ];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
