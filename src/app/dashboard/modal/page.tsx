'use client'

import Modal from "@/components/ui/modal/Modal";
import { useState } from "react";

export default function ModalPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
                onClick={openModal}
            >
                Open Modal
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-lg font-semibold mb-2">Modal Content</h2>
                <p>This is the content of the modal.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis maiores pariatur dicta ipsum. Quam natus omnis ex, quas veritatis enim, tenetur dolorem iusto asperiores quasi, culpa odio ab animi! lorem
                </p>
            </Modal>
        </div>
    );
}
