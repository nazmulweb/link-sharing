<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LinkRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'links.*.name' => 'required|string',
            'links.*.url' => [
                'required',
                'regex:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/'
            ],
        ];
    }

    public function messages()
    {
        return [
            'links.*.name.required' => 'Name is required.',
            'links.*.url.required' => 'URL is required.',
            'links.*.url.regex' => 'The URL format is invalid. Please enter a valid URL.',
        ];
    }

        /**
     * Get the validated data for the request.
     *
     * @return array
     */
    public function validated($key = null, $default = null)
    {
        // Get the validated data
        $validatedData = parent::validated();

        // Dump and die
        dd($validatedData);

        // Return the validated data
        return $validatedData;
    }
}
