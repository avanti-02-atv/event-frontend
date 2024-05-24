import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import Pesquisa from "../../../components/Admin/pesquisa/Pesquisa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteUser, getUsers } from "../../../service/api/UserService";
import CardUser from "../../../components/Admin/user/CardUser";
import LougoutButton from "../../../components/button/LogoutButton";

export default function User() {
  const [users, setUsers] = useState([]);
  const [usersRender, setUsersRender] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function getAllUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
      setUsersRender(data);
    } catch {
      console.error("Error getUsers");
    }
  }

  function filter() {
    if (users) {
      const filtered = users.filter((user) =>
        Object.values(user).some((value) =>
          value.toString().toLowerCase().includes(search.toLowerCase())
        )
      );
      setUsersRender(filtered);
    }
  }

  function handleSearch(event) {
    const value = event.target.value;
    setSearch(value);
    if (value === "") {
      getUsers();
      setUsersRender(users);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    filter();
  }, [search]);

  const onDelete = async (id) => {
    try {
      await deleteUser(id);
      getAllUsers();
    } catch {
      console.error("Error deleteUsers");
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-full overflow-hidden">
      <Header showBackButton>
        <LougoutButton />
      </Header>

      <div className="w-full flex justify-center mt-2">
        <Pesquisa search={search} handleSearch={handleSearch} />
      </div>

      <div className="flex flex-col items-center flex-1 overflow-y-auto w-full mt-4">
        <div className="w-11/12 sm:w-9/12 mx-auto mt-2">
          {usersRender && usersRender.length > 0 ? (
            usersRender.map((user) => (
              <CardUser
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                password={user.password}
                isOrganizer={user.isOrganizer}
                onDelete={onDelete}
                filter={filter}
              />
            ))
          ) : (
            <div className="flex flex-col p-6 justify-start shadow-lg bg-white w-auto h-auto rounded-lg border-4 my-4 sm:m-0">
              <h1 className="text-center text-4xl font-bold text-orange-300">
                Nenhum Usuário Encontrado!
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mt-2 mb-2">
        <button
          className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300"
          onClick={() => {
            navigate("/admin/form-user");
          }}
        >
          Adicionar User
        </button>
      </div>
      <Footer />
    </div>
  );
}
