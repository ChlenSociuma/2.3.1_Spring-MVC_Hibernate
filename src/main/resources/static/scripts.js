document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModal");
    const modal = document.getElementById("myModal");
    const closeModalBtn = modal.querySelector(".close");
    const editModal = document.getElementById("editModal");
    const closeEditModalBtn = editModal.querySelector(".close2");

    openModalBtn.addEventListener("click", () => {
        document.getElementById('age').value = '';
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    closeEditModalBtn.addEventListener("click", () => {
        editModal.style.display = "none";
    });

    const userTable = document.getElementById("userTable");
    userTable.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("edit-btn")) {
            const userId = event.target.dataset.userId;
            const row = event.target.closest('tr');
            const firstName = row.querySelector('td:nth-child(3)').textContent;
            const lastName = row.querySelector('td:nth-child(4)').textContent;
            const age = row.querySelector('td:nth-child(5)').textContent;

            document.getElementById('editUserId').value = userId;
            document.getElementById('editFirstName').value = firstName;
            document.getElementById('editLastName').value = lastName;
            document.getElementById('editAge').value = age;

            editModal.style.display = "block";
        }
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        } else if (event.target === editModal) {
            editModal.style.display = "none";
        }
    });
});