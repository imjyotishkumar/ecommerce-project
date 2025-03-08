import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../component/ProductZoom/ProductZoom';

const ProductDetails = () => {
    return (
        <div>
            <section className='py-8 pb-0'>
                <div className='container'>
                    <Breadcrumbs aria-label="breadcrumb" className='px-8'>
                        <Link underline="hover" color="inherit" href="/" className='link'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link'
                        >
                            Fashion
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className='container flex gap-4 '>
                    <div className='ProductZoomContainer'>
                        <ProductZoom />
                    </div>

                </div>

            </section>

        </div>
    )
}

export default ProductDetails