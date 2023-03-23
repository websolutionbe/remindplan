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
        Schema::create('seo_meta_tags', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('page_id')->nullable();
            $table->foreign('page_id')->references('id')->on('pages');

            $table->unsignedBigInteger('parent_id')->nullable();
            $table->string('parent_type')->nullable();

            foreach (config('client.languages') as $language) {
                $table->string('title_' . $language)->nullable();
                $table->string('description_' . $language)->nullable();
            }

            $table->boolean('no_index')->default(false);

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
        Schema::dropIfExists('seo_meta_tags');
    }
};
