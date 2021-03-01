/* eslint-disable @typescript-eslint/no-unused-vars */
import { PureComponent } from 'react';
import { Header, Banners, Panels, Grids, Footer } from '@UI';

export default class index extends PureComponent {
  render() {
    return (
      <>
        <Header />

        <Panels.TextWithImage />

        <Panels.Profile />

        <Banners.CompanyLogo />

        <Banners.RightIcon />

        <Panels.TimeLine />

        <Banners.LeftIcon />

        <Grids.OurServices />

        <Banners.RightButton />

        <Grids.Steps />

        <Panels.Versions />

        <Banners.CenterIcon />

        <Grids.Plans />

        <Panels.Pricing />

        <Banners.CenterButton />

        <Panels.Customers />

        <Banners.ProsCons />

        <Banners.Youtube />

        <Footer />
      </>
    );
  }
}
