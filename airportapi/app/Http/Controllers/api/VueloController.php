<?php

namespace App\Http\Controllers\API;

use App\Models\Vuelo;
use App\Models\Asiento;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class VueloController extends Controller
{
    //
    public function index()
    {
        $vuelos = Vuelo::all();

        return response()->json([
            'status'=> 200,
            'vuelos'=>$vuelos,
        ]);
    }

    public function show($id){
        $vuelo = Vuelo::find($id);
        if($vuelo)
        {
            return response()->json([
                'status'=> 200,
                'vuelo' => $vuelo,
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => 'No se encontraron datos del vuelo',
            ]);
        }

    }

    public function showAsientos($id, $clase)
    {
        $asientos = DB::table('asientos')->where('clase', '=', $clase)->get();



        return response()->json([
            'status'=> 200,
            'asientos'=>$asientos,
        ]);
    }


}
