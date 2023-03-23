<?php
/**
 * @author Ian Vleeshouwers ian@websolution.be
 **/

namespace App\Http\Responses;

class ErrorResponse
{
    public static function call($data = [], $status = 400): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'success' => false,
            'errors' => $data,
        ], $status);
    }
}
