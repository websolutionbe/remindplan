<?php
/**
 * @author Ian Vleeshouwers ian@websolution.be
 **/

namespace App\Http\Responses;

class SuccessResponse
{
    public static function call($message, $data = [], $status = 200): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $data,
            'message' => $message,
        ], $status);
    }
}
