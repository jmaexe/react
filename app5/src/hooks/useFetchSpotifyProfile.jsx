import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";
import { useState } from "react";
import { api } from "../api/axios";
import React from 'react'
import ErrorPage from "../components/pages/ErrorPage";
import LoadingPage from "../components/LoadingPage";

export const useFetchSpotifyProfile = () => {
    const [data, setData] = useState()
    const { data: spotifyData, isFetching, error } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const response = await api.get('me')
            return await response.json()
        }
    })
    if (data) {
        return data;
    }

    return (
        <>
            {isFetching && <LoadingPage />}
            {error && <ErrorPage error={error} />}

        </>
    )
}

