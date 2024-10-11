<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('links', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('url')->nullable();
            $table->string('iconName')->nullable();
            $table->string('color')->nullable();
            $table->integer('order')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Relating the link to a user
            $table->timestamps();

            // Add a composite unique index for the name and user_id
            $table->unique(['name', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('links', function (Blueprint $table) {
            $table->dropUnique(['name', 'user_id']);
            $table->dropForeign(['user_id']);

            $table->dropIfExists();
        });
    }
};
