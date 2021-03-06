<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DataRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "userid"=>["nullable","string"],
            'date'=> ['required', 'string'],
            'time'=> ['required', 'string'],
            "type"=>["nullable",'numeric', 'min:1', 'max:6'],
            'value'=>["nullable"]
        ];
    }
}
