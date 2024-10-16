<?php

namespace Database\Seeders;

use App\Models\User;
use Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Add a single user
        User::create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password1'), // securely hash the password
        ]);
        
        
    }
}
