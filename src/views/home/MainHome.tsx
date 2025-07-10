import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import type { IAncientWonder } from "~/@types/ancient-wonder/IAncientWonder";
import CardList from "~/components/card-list/CardList";
import { LoadingSkeletonCard } from "~/components/loading/skeleton-card/LoadingSkeletonCard";
import { NotFoundInfo } from "~/components/notfoundinformation/NotFoundInfo";
import { FetchAllAncientWonders } from "~/services/sanity/Sanity.Services";

export default function MainHome() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IAncientWonder[]>([]);

  useEffect(() => {
    fetchAllAncientWonders();
  }, []);

  async function fetchAllAncientWonders() {
    setLoading(true);
    const res = await FetchAllAncientWonders();
    setLoading(false);
    if (res && res.statusCode === 200 && res.taskStatus) {
      setData(res.data);
    }
  }

  return (
    <div>
      <div className="container-title">
        <h1 className="text-center">7 Ancient Wonder</h1>
      </div>
      {loading ? <LoadingSkeletonCard /> : data.length === 0 ? <NotFoundInfo />
        : <Grid container spacing={2}>
          {data.map((item: IAncientWonder, idx: number) =>
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx} component={Grid}>
              <CardList data={item} />
            </Grid>
          )}
        </Grid>
      }
    </div>
  );
}