'use client';

import { getStockBySlug } from '@/actions';
import { inter, titleFont } from '@/config/fonts';
import { useEffect, useState } from 'react';

interface Props {
  slug: string;
}

export const StockLabel = ( { slug }: Props ) => {

  const [ stock, setStock ] = useState( 0 );
  const [ isLoading, setIsLoading ] = useState( true );

  useEffect( () => {
    getStock();

  }, [] );

  const getStock = async () => {

    const inStock = await getStockBySlug( slug );
    setStock( inStock );
  };

  return (
    <>
      <h1 className={ ` ${ titleFont.className } antialiased font-bold text-lg` }>
        Stock: { stock }
      </h1>

      <h1 className={ ` ${ titleFont.className } antialiased font-bold text-lg animate-pulse`  }>
        &nbsp;
      </h1>
    </>


  );
};