<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Responses\ExceptionResponse;
use App\Http\Responses\SuccessResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        if(Auth::attempt([
            'email' => $request['email'],
            'password' => $request['password']
        ])){
            $request->session()->regenerate();

            return SuccessResponse::call(
                'Logged in successfully',
                ['user' => auth()->user()],
                201
            );
        }

        return ExceptionResponse::call(
            'Wrong credentials',
            null,
            400
        );
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('login');
    }
}
