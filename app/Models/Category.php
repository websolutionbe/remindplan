<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'key',
        'period',
        'color'
    ];

    protected $appends = ['title','slug', 'progress'];

    public function getTitleAttribute()
    {
        return $this->{'title_' . app()->getLocale()};
    }

    public function getSlugAttribute()
    {
        return $this->{'slug_' . app()->getLocale()};
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function getProgressAttribute()
    {
        $total = $this->tasks()->count();
        $done =  $this->tasks()->where('done', true)->count();
        $percentage = ($done / $total) * 100;

        return [
            'total' => $total,
            'done' => $done,
            'percentage' => $percentage
        ];
    }
}
