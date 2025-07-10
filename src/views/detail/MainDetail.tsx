import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { IAncientWonder } from "~/@types/ancient-wonder/IAncientWonder";
import Breadcrumb from "~/components/breadcrumb/Breadcrumb";
import CardElement from "~/components/card-list/card/CardElement";
import { LoadingSkeletonCard } from "~/components/loading/skeleton-card/LoadingSkeletonCard";
import { NotFoundInfo } from "~/components/notfoundinformation/NotFoundInfo";
import { FetchAncientWonderById } from "~/services/sanity/Sanity.Services";

export default function MainDetail() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IAncientWonder | null>(null);

  useEffect(() => {
    const spitPath = pathname.split('/')[1];
    if (pathname) {
      fetchAllAncientWonders(spitPath);
    }
  }, [pathname]);

  async function fetchAllAncientWonders(id: string) {
    setLoading(true);
    const res = await FetchAncientWonderById(id);
    setLoading(false);
    if (res && res.statusCode === 200 && res.taskStatus) {
      setData(res.data[0]);
    }
  }

  return (
    <div>
      <div className="container-title">
        <h1 className="text-center !w-fit">{data?.nameEn ?? ""}</h1>
        <Breadcrumb />
      </div>

      {loading ? <LoadingSkeletonCard /> : data === null
        ? <NotFoundInfo />
        : <CardElement nameEn={data.nameEn} nameTh={data.nameTh} image={data.image.asset._ref}
          detail={data.detail}
          locationName={data.locationName}
          map={data.map}
        />
      }
    </div>
  );
}