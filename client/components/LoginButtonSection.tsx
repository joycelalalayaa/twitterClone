import { useRouter } from "next/navigation";
import Button from "./Button";

export default function LoginButtonSection(): JSX.Element{
  const router = useRouter();
    return (
        <div className="flex gap-4">
            <Button
              variant="secondary"
              label="Log in"
              onClick={() => router.push("/login")}
            />
            <Button
              variant="secondary"
              label="Sign up"
              onClick={() => router.push("/register")}
            />
        </div>
    );
}