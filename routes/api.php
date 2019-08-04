<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/test/{number}', function (Request $request) {
    return [
        'data' => [
            'string' => 'hello',
            'number' => (int) $request->number,
            'stringNumber' => (int) $request->number, //failed
            // 'stringNumber' => $request->number,
            'object' => [
                'key' => 'value'
            ],
            'array' => [1, 2, 3]
        ]
    ];
});
