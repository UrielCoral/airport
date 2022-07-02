<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vuelos_id')->constrained('vuelos');
            $table->string('asiento');
            $table->foreignId('pasajero_id')->constrained('pasajeros');
            $table->string('estatus'); //apartado, no disponible, cancelado
            $table->dateTime('fecha_hora_reservacion');
            $table->string('num_confirmacion'); //formado por vuelos_id y fecha_hora_reservacion
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservas');
    }
}
