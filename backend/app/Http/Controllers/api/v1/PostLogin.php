<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use Hash;
class PostLogin extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'username' => 'required|string|max:255',
            'password' => 'required|min:6|'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('username', 'password');

        if(!$token = auth()->guard('api')->attempt($credentials)){
            return response()->json([
                'message' => 'Anauthorized user!'
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Successfully login!',
            'data' => auth()->guard('api')->user(),
            'token' => $token
        ], 200);

    }
}
