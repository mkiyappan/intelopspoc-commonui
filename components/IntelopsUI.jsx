import Image from 'next/image';
import React from 'react';
import Button from 'intelops-common-ui/packages/react/components/Button/src';
import Card from 'intelops-common-ui/packages/react/components/Card/src';
import Typography from 'intelops-common-ui/packages/react/components/Typography/src';

export default function IntelopsUI() {
    const handleButtonClick = () => {
        alert('button clicked')
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <div className='testbutton'>test
                    <Button
                        varient='gradient'
                        className="mybutton"
                        onClick={handleButtonClick}
                    >Tanuja button
                    </Button>
                    <Card
                        title ="Cart title"
                        caption="As Uber works through a huge amount of internal management turmoil."
                        imageURL="https://www.creative-tim.com/learning-lab/assets/tailwind-soft-ui-dashboard/img/home-decor-1.jpg"
                    />
                    <Typography
                        varient="h5"
                    >
                        adsadsadsad sdfadas
                    </Typography>
                </div>
            </div>
        </main>
    )
}
