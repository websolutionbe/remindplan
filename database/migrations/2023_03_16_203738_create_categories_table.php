<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('group_id')->nullable();
            $table->foreign('group_id')->references('id')->on('groups');

            $table->string('key')->unique();
            $table->enum('period', ['day', 'week', 'month', 'quarter', 'year']);
            $table->enum('color', ['green', 'blue', 'red', 'yellow']);

            foreach (config('client.languages') as $language) {
                $table->string('title_' . $language);
                $table->string('slug_' . $language);
            }

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
