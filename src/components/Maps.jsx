import React from "react";

function Maps() {
  return (
    <>
      <div class="nike-container mb-3 h-[50vh]">
        <div className="grid items-center">
          <h1 className="text-5xl lg:text-4xl md:text-3xl font-semibold">Lokasi Toko</h1>
        </div>
        <div className="mt-5 w-full h-96 flex items-center justify-center">
          <iframe className="h-[50vh] w-5/6 py-5" id="gmap_canvas" src="https://maps.google.com/maps?q=surabaya&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>
    </>
  );
}

export default Maps;
