import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle("Computer Repairs");

  return (
    <Routes>
      {/* This will be the root that renders the children Routes */}
      <Route path="/" element={<Layout />}>
        {/* main root path, path = "/" */}
        <Route index element={<Public />} />
        {/* path for the employee login page */}
        <Route path="login" element={<Login />} />

        {/* Wrapping with Persists */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            {/* Wrapping with Prefetch */}
            <Route element={<Prefetch />}>
              {/* path for dash after login, and wraps all children routes */}
              <Route path="dash" element={<DashLayout />}>
                {/* main root path, path /dash */}
                <Route index element={<Welcome />} />
                {/* this full path will be /dash/notes and root element is NotesList */}
                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote />} />
                  <Route path="new" element={<NewNote />} />
                </Route>
                {/* End of notes */}
                <Route
                  element={
                    <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                  }
                >
                  {/* this full path will be /dash/users and root element is UsersList */}
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                  {/* End of users */}
                </Route>
              </Route>
              {/* End Dash */}.
            </Route>
            {/* End of prefetch */}
          </Route>
          {/* End of RequireAuth */}
        </Route>
        {/* End of persist */}
      </Route>
      {/* End of "/" */}
    </Routes>
  );
}

export default App;
