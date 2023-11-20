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
                <div className="max-w-3xl">
                    <h2 className="text-lg font-semibold mb-2">Modal Content</h2>
                    <p>This is the content of the modal.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis maiores pariatur dicta ipsum. Quam natus omnis ex, quas veritatis enim, tenetur dolorem iusto asperiores quasi, culpa odio ab animi! lorem
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quasi sequi accusantium, saepe inventore eligendi, enim cumque aspernatur ullam assumenda non libero ut voluptatibus repellendus qui, rerum facere ipsum autem distinctio est ipsam deleniti voluptate maiores. Accusantium molestiae provident soluta alias totam iste qui excepturi rem tenetur commodi dolore, animi corrupti, dignissimos quis, neque ducimus impedit. Quos, laudantium quo. Debitis expedita porro minus sed dolorem, iusto tempore quisquam ducimus! Praesentium voluptas beatae odit quidem quibusdam, provident minima deserunt veniam. Aperiam eum nesciunt aliquid. Fuga, illum nihil deleniti et, minus quibusdam tenetur quod cupiditate quae laborum suscipit commodi reiciendis odio animi nisi, delectus tempora vel repudiandae doloremque ut fugit? Sunt temporibus cum error praesentium quae dolor tenetur eligendi voluptates voluptatum odio aut nisi dolorum inventore ipsum nihil vel eum minus quaerat repellendus reprehenderit est, architecto quos id. Ad laudantium voluptate cupiditate harum perspiciatis officia magni minima. Maxime debitis dolorum obcaecati non omnis reprehenderit nesciunt laudantium eligendi! Debitis natus ut vitae doloribus iure, dicta possimus beatae deleniti nostrum itaque quo consequuntur nobis quod a quibusdam provident vero consequatur! Cum unde laudantium provident quidem? Minima architecto harum soluta quasi, earum libero ut voluptatum sed ad ullam sunt! Quas exercitationem, animi aliquam molestias voluptatem distinctio praesentium veniam corrupti, ab odit culpa nostrum enim hic? Ex eaque sint ut ipsa vel. Maxime expedita adipisci non natus quasi, optio soluta officia? Cupiditate cumque magni necessitatibus ipsum minima odio laborum assumenda reprehenderit deserunt, et quas, corporis modi architecto quos? Ut libero a neque non soluta laudantium? Hic maxime tempora non repellendus quas dolores modi culpa magni cum maiores! Veniam sint aspernatur, explicabo praesentium sequi dolorem assumenda libero provident error itaque vero nobis, ipsum reiciendis maxime maiores incidunt soluta perspiciatis ut unde voluptatibus eum magnam perferendis, rerum autem. Eligendi facere accusamus modi nisi repellendus velit! Consectetur quaerat quae maxime cum ullam fugiat molestiae iusto at aspernatur repudiandae nihil tempora saepe labore hic, dolorem voluptatibus quis repellat provident atque. Facilis porro itaque minima sint explicabo eligendi. Ex, voluptatem eius. Repudiandae, fuga voluptates qui reiciendis adipisci, odio quidem ducimus maiores officiis culpa eos veritatis, placeat eius at nisi. Officiis veritatis maxime molestiae molestias, error vel debitis eligendi aliquam fugit enim voluptatibus! Enim ratione dolores porro natus facere minima consectetur est, voluptas inventore distinctio, libero id quasi explicabo! Sunt consectetur amet laborum commodi optio soluta, similique voluptatum quo voluptate expedita magnam laudantium asperiores ex debitis earum nam corrupti ratione tempora perferendis ab obcaecati quisquam aspernatur. In minima incidunt assumenda, dolorum quae inventore sunt laborum velit, itaque magni veritatis repellendus minus officia nihil, blanditiis hic numquam adipisci alias optio enim illum nesciunt ipsam ab? Dolores et fugiat consequuntur vero, debitis natus voluptatem, totam quaerat laborum hic quasi magni esse nihil dolorum. Harum asperiores quia quaerat fugiat cum culpa, facere voluptates odio consequuntur in autem laudantium, quo rerum error! Saepe cupiditate quasi porro fuga quo explicabo sequi temporibus animi nulla. Sapiente itaque obcaecati dolore eveniet fugit maxime eos? Neque, similique perspiciatis! Ducimus tenetur sit nostrum enim ipsa beatae eveniet facilis repellat obcaecati blanditiis cupiditate neque amet delectus ab nam hic, quibusdam consectetur ipsam, vero nihil? Voluptatum veniam temporibus id consectetur dolorum quo soluta, repellendus provident deleniti suscipit blanditiis amet, doloribus, nisi voluptates quasi? Veniam rerum iste enim omnis! Porro, fugiat. At omnis iure maiores, veniam nisi in cupiditate, consectetur vitae commodi fuga unde! Quis illo eum vitae, vero modi commodi facere dolorum! Dicta voluptatem in commodi aspernatur, quae natus omnis optio inventore voluptates blanditiis ducimus vitae autem error exercitationem est culpa. Reprehenderit quia consectetur animi. Ab illum voluptatum, itaque aut officia debitis, eius ratione consectetur consequatur vero a laborum voluptas voluptatem fuga harum. Molestiae exercitationem placeat accusantium adipisci sed odit assumenda sint rem repellendus? Libero autem assumenda perspiciatis in maiores amet voluptate esse officia iure impedit mollitia voluptatem, dolore ex earum blanditiis minus provident. Itaque recusandae inventore commodi sapiente facilis eligendi placeat facere voluptas ipsa reiciendis, blanditiis fugit ex beatae quas, at est rerum ullam dolorum, ipsum natus laboriosam! Sunt maxime quo ipsam libero similique praesentium sed. Perspiciatis amet eveniet praesentium? Minima alias deleniti, libero voluptatibus quidem eligendi non optio ea ad nulla, quis consequatur cumque animi iure, doloribus enim quia. Iure delectus natus aperiam eius, nulla voluptatibus hic! Quis iste dolorem, qui accusantium saepe sed blanditiis aperiam cumque, odio recusandae nisi sunt. Iste officiis nam illo corrupti perspiciatis possimus obcaecati. Odit tempore obcaecati eveniet voluptas quaerat atque illum eos optio dicta esse asperiores possimus nemo, doloribus temporibus minima cum nostrum expedita ab minus voluptatem molestiae! At suscipit fugit ipsum necessitatibus quidem, molestiae dolor id rerum fuga ut est sit error deleniti quos accusantium? Et quisquam eaque consectetur sint libero quidem beatae itaque ea ipsum? Eveniet magnam, expedita impedit dolore facilis quibusdam dolorum consequatur nostrum maiores debitis aliquam assumenda laboriosam, maxime, placeat ad repellat fuga sed? Dolores quasi ipsa impedit adipisci, quis numquam cum minima accusantium nemo tenetur possimus repellat? Deserunt labore, fugiat quis ratione perspiciatis commodi quia illo dolorum consectetur! Odio reprehenderit numquam recusandae excepturi architecto cupiditate pariatur eaque, blanditiis voluptates impedit quis est, non sed fugit officiis porro quam rerum debitis eius in eos laboriosam nam dolorem. Quidem dolor facilis voluptatem impedit officiis maiores a, ullam asperiores unde perspiciatis at dicta? Molestias aperiam impedit nulla iste, debitis assumenda quo, repudiandae voluptatibus blanditiis odio voluptatem quibusdam libero vel accusamus, consectetur sit quis ullam nobis dignissimos ab quia in maiores numquam. Corrupti illo, quisquam debitis adipisci incidunt suscipit nemo iusto voluptate voluptates aliquid, numquam dignissimos, unde impedit fugit alias earum consequuntur? Sequi iste, vero, possimus voluptates, quia voluptate officia facilis voluptas quo minima itaque id veritatis dolor nemo illo quaerat reprehenderit molestias exercitationem? Quod culpa magnam cum minus suscipit beatae esse iste dolores quos, dolorem facere fugiat vero laborum voluptas ipsam quas necessitatibus eum cumque aliquam dolor! Distinctio quae accusamus, ex unde optio repudiandae, assumenda dicta alias culpa porro neque laborum dolore! Beatae aliquam illum quia voluptates, culpa eaque! At obcaecati similique natus soluta corporis aliquid laborum eligendi pariatur? Minus sit fugiat iure nemo dolores aut voluptatibus amet dolorem ut, veniam nulla doloremque.
                    </p>

                </div>
            </Modal>
        </div>
    );
}