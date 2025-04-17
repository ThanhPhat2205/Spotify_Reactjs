import React from 'react';
const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
          </Route>
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;