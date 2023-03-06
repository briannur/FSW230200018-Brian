import React from 'react';

const GameRequirement = () => {
  return (
    <div className="game-req bg-image">
      <p className="text-center text-muted pt-5">Can my computer run this game?</p>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className='text-white display-5 mt-5 pt-5'>SYSTEM REQUIREMENT</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td className="tg-0lax">
                    <span className='td-title'>OS:</span>
                    <br />Windows 7 64-bit only<br />No OSX support at this time
                  </td>
                  <td className="tg-0lax">
                    <span className='td-title'>PROCESSOR:</span>
                    <br />Intel Core 2 Duo @ 2.4 Ghz or<br />AMD Athalon X2 @ 2.8 Ghz
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tg-0lax">
                    <span className='td-title'>MEMORY:</span>
                    <br />4GB RAM
                  </td>
                  <td className="tg-0lax">
                  <span className='td-title'>STORAGE:</span>
                    <br />8 GB available space<br />
                  </td>
                </tr>
                <tr>
                  <td className="tg-0lax" colspan="2">
                  <span className='td-title'>GRAPHICS:</span>
                    <br />NVIDIA GeForce GTX 660 2GB or<br />AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
                  </td>
                </tr>
              </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRequirement;
