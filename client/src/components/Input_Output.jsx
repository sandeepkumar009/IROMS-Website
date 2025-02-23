import React from "react";
import { useForm } from "react-hook-form";

export default function IROMSForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log("Simulation Data:", data);
  };

  return (
    <div className="p-6 mx-auto bg-white shadow-md rounded-2xl">
      <h2 className="text-xl font-bold mb-4">IROMS Flood Simulation Input</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Simulation Type</label>
          <select {...register("simulationType", { required: true })} className="w-full p-2 border rounded">
            <option value="fluvial">Urban Flood</option>
            <option value="storm_surge">Storm Surge</option>
            <option value="coastal">Compound Flood</option>
          </select>
          {errors.simulationType && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input type="text" {...register("location", { required: true })} className="w-full p-2 border rounded" />
          {errors.location && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Rainfall Intensity (mm/hr)</label>
          <input type="number" {...register("rainfallIntensity", { required: true })} className="w-full p-2 border rounded" />
          {errors.rainfallIntensity && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Water Level (m)</label>
          <input type="number" {...register("waterLevel", { required: true })} className="w-full p-2 border rounded" />
          {errors.waterLevel && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Drainage Capacity (m³/s)</label>
          <input type="number" {...register("drainageCapacity", { required: true })} className="w-full p-2 border rounded" />
          {errors.drainageCapacity && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Run Simulation</button>
      </form>
    </div>
  );
}
