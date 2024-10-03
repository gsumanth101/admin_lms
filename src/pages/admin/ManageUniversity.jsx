import React, { useState } from 'react';

import Universities from './partials/dashboard/Universities';


function ManageUniversity() {

  return (

    <div className="px-0 sm:px-5 lg:px-8 py-8 w-full max-w-6xl mx-auto">
    <div className="overflow-x-auto">
      <Universities />
    </div>
  </div>


  );
}

export default ManageUniversity;