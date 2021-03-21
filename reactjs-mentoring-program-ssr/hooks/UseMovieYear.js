import React, { useCallback } from 'react';

function useMovieYear(date) {
  return useCallback(() => date ? new Date(date).getFullYear() : 0, [ date ]);
} 

export default useMovieYear;