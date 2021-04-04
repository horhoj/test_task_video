import React from "react";

const MainLayout: React.FC = ({children}): JSX.Element => {
  return (
    <div className="container p-2 min-vh-100 d-flex">
      <div className="d-flex container rounded-lg flex-grow-1 bg-white p-2 flex-column">
        <>
          {children}
        </>
      </div>
    </div>
  )
}

export default MainLayout;
