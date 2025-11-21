export default function LogoutDialog() {
  return (
    <dialog id="logout_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-warning">Are you leaving?</h3>
        <p className="py-4">are you sure want to log out?</p>
        <div className="modal-action">
          <button className="btn">Cancel</button>
          <button className="btn btn-warning">Yes!</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>{" "}
    </dialog>
  );
}
