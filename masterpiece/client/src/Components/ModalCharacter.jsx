import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query'

const ModalCharacter = ({ mal_id, name, showModal, show }) => {


    const { isPending, error, data } = useQuery({
        queryKey: ['character', { mal_id }],
        queryFn: async () => {
            const response = await fetch("https://api.jikan.moe/v4/characters/" + mal_id);
            const json = await response.json();
            console.log(json);
            return json.data
        },
        staleTime: Infinity
    })
    return (

        <dialog id={"my_modal_character" + mal_id} className="modal" open={show}>
            <div className="modal-box 2xl:w-11/12 xl:w-full">  
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={showModal}>✕</button>
                </form>
                <h3 className="font-bold text-lg text-primary">About {name}</h3>

                {isPending ? <span className="loading loading-bars loading-lg"></span> : <p className="py-4" style={{ whiteSpace: 'pre-line' }}>{data?.about}</p>}
                {error && <Error />}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={showModal}>close</button>
            </form>
        </dialog>
    )
}

export default ModalCharacter