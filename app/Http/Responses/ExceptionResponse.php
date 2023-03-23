<?php
/**
 * @author Ian Vleeshouwers ian@websolution.be
 **/

namespace App\Http\Responses;

class ExceptionResponse
{
    public static function call($message, $exception, $status = 400): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message ?: $exception->getMessage(),
            'exception' => $exception,
        ], $status);
    }
}
