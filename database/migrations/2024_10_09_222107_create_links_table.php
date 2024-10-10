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
            $table->string('name')->nullable()->unique();
            $table->string('url')->nullable();
            $table->string('iconName')->nullable();
            $table->string('color')->nullable();
            $table->integer('order')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Relating the link to a user
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('links', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');
            $table->dropIfExists();
        });
    }
};
